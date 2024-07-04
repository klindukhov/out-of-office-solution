import { Link } from "react-router-dom";

export interface AuthPageProps {
  userRoles: { [userRoleCode: string]: string };
  setCurrentUserRole: (currentUserRole: string) => void;
}

export default function AuthPage(props: AuthPageProps) {
  return (
    <div className="w-screen h-screen bg-slate-50 grid items-center justify-items-center">
      <div className="h-[40vh] w-[40vw] border-solid border-cyan-400 border-[2px] rounded-[2rem] grid items-center justify-items-center">
        Sign In
        {Object.entries(props.userRoles).map(([roleCode, roleName]) => (
          <Link
            to="/dashboard"
            onClick={() => props.setCurrentUserRole(roleCode)}
            className="h-[8vh] w-[80%] border-solid border-cyan-400 border-[2px] rounded-[1rem] grid items-center justify-items-center hover:bg-cyan-100 transition:colors duration-150"
          >
            {roleName}
          </Link>
        ))}
      </div>
    </div>
  );
}
