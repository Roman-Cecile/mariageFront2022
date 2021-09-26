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
          window.localStorage.setItem(
            "familyId",
            response.data.family[0].family_id
          );
          store.dispatch(stateUsers("login", response.data.family));
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
      if (
        !window.localStorage.getItem("familyId") ||
        window.localStorage.getItem("familyId") === undefined
      ) {
        return console.log("no session");
      }
      axios(
        {
          method: "GET",
          url: `${urlAPI}/check/${window.localStorage.getItem("familyId")}`,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          store.dispatch(stateUsers("login", response.data.family));
        })
        .catch((err) => {
          // console.info({ err });
        });
      break;
    }
    case AXIOS_LOGOUT: {
      const familyId = store.getState().familyReducer.users["0"].family_id;
      axios(
        {
          method: "DELETE",
          url: `${urlAPI}/logout/${familyId}`,
        },
        {
          withCredentials: true,
        }
      )
        .then((response) => {
          window.localStorage.clear();
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
