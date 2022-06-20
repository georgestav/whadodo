import { useContext } from "react";
import { APISuccessContext } from "../../../providers/APISuccessProvider";


function useAPISuccess() {
    const { success, addSuccess, removeSuccess } = useContext(APISuccessContext);
    return { success, addSuccess, removeSuccess };
}

export default useAPISuccess;