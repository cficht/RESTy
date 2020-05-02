import { fetchResponse } from './api';

describe('RESTy api', () => {
  it('can fetch a response', () => {
    // eslint-disable-next-line no-undef
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({      
        avatar_url: 'https://avatars1.githubusercontent.com/u/31808641?v=4',
        bio: 'Full stack web developer. Passionate about music and innovation. Likes collaboration and creative problem-solving.',
        blog: 'https://www.linkedin.com/in/chrisficht/',
        company: null,
        created_at: '2017-09-09T22:23:06Z',
        email: null,
        events_url: 'https://api.github.com/users/cficht/events{/privacy}',
        followers: 5,
        followers_url: 'https://api.github.com/users/cficht/followers',
        following: 12,
        following_url: 'https://api.github.com/users/cficht/following{/other_user}',
        gists_url: 'https://api.github.com/users/cficht/gists{/gist_id}',
        gravatar_id: '',
        hireable: null,
        html_url: 'https://github.com/cficht',
        id: 31808641,
        location: 'Portland, Oregon',
        login: 'cficht',
        name: 'Chris Ficht',
        node_id: 'MDQ6VXNlcjMxODA4NjQx',
        organizations_url: 'https://api.github.com/users/cficht/orgs',
        public_gists: 0,
        public_repos: 39,
        received_events_url: 'https://api.github.com/users/cficht/received_events',
        repos_url: 'https://api.github.com/users/cficht/repos',
        site_admin: false,
        starred_url: 'https://api.github.com/users/cficht/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/cficht/subscriptions',
        type: 'User',
        updated_at: '2020-05-01T22:48:49Z',
        url: 'https://api.github.com/users/cficht'
      })
    });

    return fetchResponse()
      .then(response => {
        expect(response).toEqual({      
          avatar_url: 'https://avatars1.githubusercontent.com/u/31808641?v=4',
          bio: 'Full stack web developer. Passionate about music and innovation. Likes collaboration and creative problem-solving.',
          blog: 'https://www.linkedin.com/in/chrisficht/',
          company: null,
          created_at: '2017-09-09T22:23:06Z',
          email: null,
          events_url: 'https://api.github.com/users/cficht/events{/privacy}',
          followers: 5,
          followers_url: 'https://api.github.com/users/cficht/followers',
          following: 12,
          following_url: 'https://api.github.com/users/cficht/following{/other_user}',
          gists_url: 'https://api.github.com/users/cficht/gists{/gist_id}',
          gravatar_id: '',
          hireable: null,
          html_url: 'https://github.com/cficht',
          id: 31808641,
          location: 'Portland, Oregon',
          login: 'cficht',
          name: 'Chris Ficht',
          node_id: 'MDQ6VXNlcjMxODA4NjQx',
          organizations_url: 'https://api.github.com/users/cficht/orgs',
          public_gists: 0,
          public_repos: 39,
          received_events_url: 'https://api.github.com/users/cficht/received_events',
          repos_url: 'https://api.github.com/users/cficht/repos',
          site_admin: false,
          starred_url: 'https://api.github.com/users/cficht/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/cficht/subscriptions',
          type: 'User',
          updated_at: '2020-05-01T22:48:49Z',
          url: 'https://api.github.com/users/cficht'
        });
      });
  });
});
