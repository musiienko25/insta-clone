import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

function useSignUpWithEmailAndPassword() {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast(auth);
  const loginUser = useAuthStore((state) => state.login);
  const logoutUser = useAuthStore((state) => state.logout);
  const signup = async (inputs) => {
    console.log(inputs);
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      console.log("fill");
      return;
    }

    const usersRef = collection(firestore, "users");

    const q = query(usersRef, where("username", "==", inputs.username));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("error", "username already existst", "error");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullName,
          bio: "",
          profilePicUSL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        console.log("the new user sent");
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("error", error.message, "error");
    }
  };
  return { loading, error, signup };
}

export default useSignUpWithEmailAndPassword;
