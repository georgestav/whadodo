import {useContext} from "react";
import {APIUserContext} from "../../../providers/APIUserProvider";
import {I_UserOptions} from "../../../interfaces/I_UserContext";

function useAPIUserContext () {
    const { options, addOptions, removeOptions } = useContext(APIUserContext);
    return { options, addOptions, removeOptions };
}

export default useAPIUserContext;
