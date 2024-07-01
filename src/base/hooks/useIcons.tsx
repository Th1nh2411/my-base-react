// auth provider
import {
  CalendarIcon,
  CarIcon,
  DolarIcon,
  GraphIcon,
  GroupUserIcon,
  ListIcon,
  MailIcon,
  PhoneCallIcon,
  SettingIcon,
  TaskIcon,
  UserInfoIcon
} from '@base/assets/icons';
export const iconMap: { [key: string]: (props: React.SVGProps<SVGSVGElement>) => JSX.Element } = {
  vehicle: (props) => <CarIcon {...props} />,
  planning: (props) => <CalendarIcon {...props} />,
  member: (props) => <GroupUserIcon {...props} />,
  setting: (props) => <SettingIcon {...props} />,
  discount: (props) => <DolarIcon {...props} />,
  notification: (props) => <MailIcon {...props} />,
  note: (props) => <ListIcon {...props} />,
  service: (props) => <PhoneCallIcon {...props} />,
  statistics: (props) => <GraphIcon {...props} />,
  account: (props) => <UserInfoIcon {...props} />,
  task: (props) => <TaskIcon {...props} />
};
export const useIcons = () => {
  const getIconByKey = (key: string, props: React.SVGProps<SVGSVGElement>): JSX.Element | null => {
    const IconComponent = iconMap[key];
    return IconComponent ? <IconComponent {...props} /> : null;
  };
  return {
    getIconByKey
  };
};
