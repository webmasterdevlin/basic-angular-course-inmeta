const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [...getJestProjects(), '<rootDir>/apps/demo', '<rootDir>/apps/api'],
};
