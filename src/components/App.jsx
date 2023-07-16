import { Container } from './Container/Container';

import user from '../configs/user';
import { Profile } from './Profile/Profile';

import data from '../configs/data';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Container>
  );
};
