import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const useLogin = () => {
  const showToast = useShowToast();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth, email, password);

  const login = async() => {
    if (!inputs.email || !inputs.password) {
      return showToast("Error", "please fill all the fileds", "error")
    }
    try {
      const userCred = await signInWithEmailAndPassword(email, password);

      if (userCred) {
        const docRef = doc(firestore, "cities", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
      }

    } catch (error) {
        showToast("Error: ", error.message, "error")
  }
};

export default useLogin;
