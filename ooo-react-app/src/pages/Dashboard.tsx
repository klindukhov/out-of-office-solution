export interface DashboardProps {
  currentUserRole: string;
}

export default function Dashboard(props: DashboardProps) {
  return <>{props.currentUserRole}</>;
}
