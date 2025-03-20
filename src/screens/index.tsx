import Login from './login';
import Alarm from './alarm';

export enum Screens {
  Login = 'LoginScreen',
  Alarm = 'AlarmScreen',
}

export const AttendanceModuleScreens: any['screens'] = {
  auth: [],
  main: [
    {
      component: Login,
      name: Screens.Login,
    },
    {
      component: Alarm,
      name: Screens.Alarm,
    },
  ],
};
