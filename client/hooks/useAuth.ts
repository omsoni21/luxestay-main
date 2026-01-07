import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService, User } from "@/utils/auth";

export const useAuth = (requiredRole?: string[]) => {
  const navigate = useNavigate();
  const user = authService.getCurrentUser();

  useEffect(() => {
    // Check if user is authenticated
    if (!user) {
      navigate("/guest/login");
      return;
    }

    // Check if user has required role
    if (requiredRole && !requiredRole.includes(user.role)) {
      navigate("/");
      return;
    }
  }, [user, requiredRole, navigate]);

  return user;
};
