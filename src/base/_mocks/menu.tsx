import { MenuItemType, sidebarType } from '@base/types/menu';

export const sidebarDefaultData: sidebarType = {
  activeMenu: {
    key: 'vehicle',
    title: '차량',
    url: '/vehicle'
  },
  listSidebar: {}
};

export const topMenuData: MenuItemType[] = [
  {
    key: 'vehicle',
    title: '차량',
    url: '/vehicle'
  },
  {
    key: 'planning',
    title: '예약/이용',
    url: '/planning'
  },
  {
    key: 'member',
    title: '회원',
    url: '/member'
  },
  {
    key: 'setting',
    title: '인프라',
    url: '/setting'
  },
  {
    key: 'discount',
    title: '프로모션',
    url: '/discount'
  },
  {
    key: 'notification',
    title: '알림 발송',
    url: '/notification'
  },
  {
    key: 'note',
    title: '게시판',
    url: '/note'
  },
  {
    key: 'service',
    title: '고객센터',
    url: '/service'
  },
  {
    key: 'statistics',
    title: '통계',
    url: '/statistics'
  },
  {
    key: 'account',
    title: '계정',
    url: '/account'
  },
  {
    key: 'task',
    title: '업무',
    url: '/task'
  }
];
