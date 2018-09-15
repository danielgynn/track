export const GET_APP_HEADER = 'GET_APP_HEADER';

export function getAppHeader() {
  return {
    type: GET_APP_HEADER,
    header: {
      title: 'Track',
      subtitle: 'Keep track of your progress towards achieving personal goals and habits.'
    }
  };
}
