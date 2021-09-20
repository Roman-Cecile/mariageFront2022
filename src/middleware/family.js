import axios from "axios";

import {
  AXIOS_LOGIN,
  AXIOS_CHECK_LOG,
  AXIOS_LOGOUT,
  stateUsers,
  stateResetAfterLogout,
  stateMessage,
  // axiosCheckLog,
} from "../actions/family";
import { urlAPI } from "../utils";

axios.defaults.withCredentials = true; // ! NE JAMAIS OUBLIER
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const familyAPI = (store) => (next) => (action) => {
  switch (action.type) {
    case AXIOS_LOGIN: {
      const data = new FormData();
      data.set("password", action.password);
      axios(
        {
          method: "POST",
          url: `${urlAPI}/login`,
          data,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          console.log({ response });
          // localStorage.setItem("userId", response.data.family[0].user.id);
          // store.dispatch(
          //   stateUsers("login", response.data.family, response.data.sid)
          // );
          // store.dispatch(axiosCheckLog());
        })
        .catch((err) => {
          if (err.response) {
            store.dispatch(stateMessage(err.response.data.message));
          } else {
            console.log({ err });
            store.dispatch(
              stateMessage(
                "Le serveur ne répond pas, veuillez réessayez plus tard"
              )
            );
          }
        });
      break;
    }
    case AXIOS_CHECK_LOG: {
      axios(
        {
          method: "GET",
          url: `${urlAPI}/check`,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          localStorage.getItem("sid") !== undefined &&
            localStorage.setItem("sid", response.data.sid);
          store.dispatch(
            stateUsers("login", response.data.family, response.data.sid)
          );
        })
        .catch((err) => {
          console.info({ err });
        });
      break;
    }
    case AXIOS_LOGOUT: {
      const familyId = store.getState().familyReducer.users["0"].family_id;
      const sid = store.getState().familyReducer.sid;
      axios(
        {
          method: "DELETE",
          url: `${urlAPI}/logout/${familyId}/${sid}`,
          data: sid,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          localStorage.clear();
          store.dispatch(stateResetAfterLogout());
        })
        .catch((err) => {
          //   console.info({ err });
        });
      break;
    }

    default:
      next(action);
  }
};

export default familyAPI;
