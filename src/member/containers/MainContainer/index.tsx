import { Outlet } from 'react-router-dom';

export interface IMainContainerProps {}

export default function MainContainer(props: IMainContainerProps) {
  return (
    <div>
      <Outlet />
    </div>
  );
}
