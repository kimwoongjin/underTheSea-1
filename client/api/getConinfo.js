import api from "./index";

const coninfoApi = {
  getConinfo: async (container_id, month) => {
    const res = await api.get(`/container/${container_id}/${month}`);
    return res;
  },
};

export default coninfoApi;
