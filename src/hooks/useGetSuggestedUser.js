import React from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { collection, query, where, orderBy } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

function useGetSuggestedUser() {
  const [isLoading, setIsloading] = useState();
  const [suggestedUsers, setSuggestedUsers] = useState();
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getSuggestedUsers = async () => {
      setIsloading(true);
      try {
        const usersRef = collection(firestore, "users");
        const q = query(
          usersRef,
          where("uid", "not-in", [authUser.uid, authUser.following]),
          orderBy("uid", "asc"),
          limit(3)
        );

        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        setSuggestedUsers(users);
      } catch (error) {
        showToast("error", error.message, "error");
      }
    };
    if (authUser) getSuggestedUsers();
  }, [authUser, showToast]);
  return { isLoading, suggestedUsers };
}

export default useGetSuggestedUser;
