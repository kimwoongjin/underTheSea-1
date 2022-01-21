



  
  

    //---------------
   
    
  };



  

  }

  // const conExInfo = JSON.parse(localStorage.getItem("conExInfo"));
  // 환수데이터가공

    // console.log(oneDayList)
  });


  // const levelUpRequest = () => {
  // for (let key in final_list) {
  //   if (curWeek.includes(key)) exp.push(1);
  // }

  // for (let key in exWaterObj) {
  //   if (curWeek.includes(key)) exp.push(2);
  //   break;
  // }
  useEffect(() => {
    // console.log("조건문밖 요청", expArr);
    // console.log("경험치길이", expArr.length);
    // console.log("환수포함여부", expArr.includes(2));
    if (expArr.length >= 15 && expArr.includes(2)) {
      // console.log("조건문안 요청", expArr);
      axios
        .patch(
          `http://localhost:80/container/${container_id}/level`,
          {},
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          localStorage.setItem("conInfo", JSON.stringify(res.data.data));
          handleCondata(res.data.data);
          if (
            res.message === "You've already leveled up this week" ||
            res.message === "You've reached max level"
          ) {
          }
          console.log("res--->", res);
          SetProgressBar([]);
          setExpArr([]);
        })
        .catch((err) => console.log(err));
    }
  }, [expArr]);
  // console.log("렙업요청안의 경험치배열", expArr);

  // };

  useEffect(() => {
    axios
      .get(
        `http://localhost:80/container/${container_id}/${month}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log("response:", res.data.data);
        // levelUpRequest();
        localStorage.setItem("conInfo", JSON.stringify(res.data.data));
        handleCondata(res.data.data);

        let final_list = {};
        condata.feed_list.forEach((el1) => {
          let one_day_list = condata.feed_list.filter(
            (el2) => el1.createdAt === el2.createdAt
          );
          let array = [0, 0, 0, 0];
          one_day_list.forEach((el) => (array[el.type - 1] = el.count));
          final_list[el1.createdAt] = array;
        });

        //---------------
        let temp = [];
        for (let key in final_list) {
          if (curWeek.includes(key)) {
            let sum = final_list[key].reduce((a, b) => a + b);
            for (let i = 0; i < sum; i++) {
              temp.push(1);
            }
          }
        }
        if (!expArr.includes(2)) {
          for (let key in exWaterObj) {
            if (curWeek.includes(key)) temp.push(2);
            break;
          }
        }
        setExpArr(temp);
        console.log("랜더링 되자마자 temp", temp);
        console.log("랜더링 되자마자 expArr", expArr);
        EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
        console.log("피딩기록추가에 exp", expArr);
        console.log("피딩기록추가에 EXP", EXP);
        SetProgressBar(EXP);
      })
      .catch((err) => console.log(err));
  }, []);

 

  

      // --------- 피딩데이터 가공 ---------

      let final_list = {};
      condata.feed_list.forEach((el1) => {
        let one_day_list = condata.feed_list.filter(
          (el2) => el1.createdAt === el2.createdAt
        );
        let array = [0, 0, 0, 0];
        one_day_list.forEach((el) => (array[el.type - 1] = el.count));
        final_list[el1.createdAt] = array;
      });

      let temp = [];
      for (let key in final_list) {
        if (curWeek.includes(key)) {
          let sum = final_list[key].reduce((a, b) => a + b);
          for (let i = 0; i < sum; i++) {
            temp.push(1);
          }
        }
      }
      if (!expArr.includes(2)) {
        for (let key in exWaterObj) {
          if (curWeek.includes(key)) temp.push(2);
          break;
        }
      }
      setExpArr(temp);
      console.log("임시배열 temp", temp);
      EXP = temp.length === 0 ? 0 : Math.floor((temp.length * 100) / 15);
      console.log("피딩기록추가에 exp", expArr);
      console.log("피딩기록추가에 EXP", EXP);
      SetProgressBar(EXP);
      dispatch(modalOff);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
     
 <Header2 />
      <Container>
        <Title>My Aquarium</Title>
        <TextContainer>
          {/* <Text>Hello</Text> */}
          <Text>{condata.container_name}</Text>
          {/* <Text>수조</Text> */}
        </TextContainer>
      </Container>
      {/* ----------------------------------------- */}
      <OuterContainer>
        <ImgContainer>
          <MainImg src={imgSrcUrl} alt="" />
        </ImgContainer>
        {/* ----------------------------------------- */}

        {/* ----------------------- */}

        <MidContainer>
          {/* ----------------------------------------- */}
          <Level>
            <LevelCover>
              <LevelText>Lv.</LevelText>
              <Levelinfo>{Math.floor(condata.level / 10)}</Levelinfo>
            </LevelCover>
            <Logo
              src="https://iconmage.s3.ap-northeast-2.amazonaws.com/로고.png"
              alt="/로고.png"
            />
          </Level>
          <ProgressBar>
            <Progress EXP={`${progressBar}%`}></Progress>
          </ProgressBar>
          <BtnContainer>
            <Button onClick={() => dispatch(feedingInputModalOnAction)}>
              피딩기록
            </Button>
            <Button
              onClick={() => dispatch(myAquariumInfoModalOnAction)}
              className="info"
            >
              수조정보
            </Button>
            <Button onClick={() => dispatch(exchangeWaterModalOnAction)}>
              환수기록
            </Button>
          </BtnContainer>
        </MidContainer>
        <BottomContainer>
          <HelpBtn
            onClick={() => {
              dispatch(helpInfoModalOnAction);
              console.log(isHelpModal);
            }}
          >
            도움말
          </HelpBtn>
          <AddfishBtn onClick={() => dispatch(addfishModalOnAction)}>
            물고기추가
          </AddfishBtn>
          <DeadfishBtn onClick={() => dispatch(deadfishModalOnAction)}>
            용궁기록
          </DeadfishBtn>
        </BottomContainer>
        {/* -------------------- 달력 ------------------- */}
        <CalendarContainer>
          <Control>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, "month"));
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="2x" color="#108dee" />
            </CalendarBtn>
            <Span>{today.format("YYYY 년 MM 월")}</Span>
            <CalendarBtn
              onClick={() => {
                setMoment(getMoment.clone().add(1, "month"));
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                size="2x"
                color="#108dee"
              />
            </CalendarBtn>
          </Control>
          <WeekContainer>
            <Day className="sun">일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day className="sat">토</Day>
          </WeekContainer>
          <Table>
            <Tbody>{calendarArr()}</Tbody>
          </Table>
        </CalendarContainer>

        {/* ----------------------------------------- */}

        {/* <ManageDetCard condata={condata} /> */}
      </OuterContainer>
      {isMyAquariumInfoModal && (
        <AquaInfo
          condata={condata}
          total={total}
          container_id={container_id}
          month={month}
        />
      )}
      {isFeedingModal && (
        <FeedingInput
          addFeedingNum={addFeedingNum}
          handleFoodtype={handleFoodtype}
          feedingInfo={feedingInfo}
        />
      )}
      {isExchangeModal && (
        <ExChangeWaterInput
          handleExwaterValue={handleExwaterValue}
          exwaterAddRequest={exwaterAddRequest}
        />
      )}
      {isAddfishModal && <AddFish container_id={container_id} />}
      {isDeadfishModal && <Deadfish container_id={container_id} />}
      {isHelpModal && <HelpInfo />}
      <Footer />
    </>
  );
}
