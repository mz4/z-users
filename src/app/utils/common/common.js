import { AVATAR_LINK } from '../../constants/constants';

export const formatNewUSer = (data) => {
  const { email, firstName, lastName, favorite, description } = data;
  const newUser = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    description: description,
    avatar: AVATAR_LINK,
    favorite: favorite
  };
  return JSON.stringify(newUser);
};
