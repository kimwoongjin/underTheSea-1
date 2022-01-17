const { tips, comments, users } = require("../../models");
const { isAuthorized } = require("../tokenFunction");

module.exports = async (req, res) => {
  const tip_id = req.params.tip_id;
  let isWriter = false;
  let user_id;

  // 로그인이 되어있다면 유저id 조회
  if (req.headers.authorization) {
    const userinfo = isAuthorized(req);
    user_id = userinfo.id;
  }

  // tip_id 가 없다면 에러코드 발송
  if (!tip_id) {
    return res.status(404).json({ message: "The article doesn't exist" });
  }

  // 게시물 데이터 조회
  const tip_data = await tips.findOne({ where: { id: tip_id } });
  // 게시물을 작성한 유저정보 조회
  const tip_user_data = await users.findOne({
    where: { id: tip_data.dataValues.user_id },
  });

  // 내가 쓴 글인지 확인하는 코드 작성
  if (user_id === tip_data.dataValues.user_id) {
    isWriter = true;
  }

  return res.status(200).json({
    data: {
      ...tip_data.dataValues,
      user_name: tip_user_data.dataValues.user_name,
      isWriter,
    },
    message: "The article data is successfully returned",
  });
};
