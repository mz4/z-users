import { AVATAR_LINK } from '../../constants/constants';

export const formatNewUSer = (data) => {
  const { email, firstName, lastName, favorite, description } = data;
  const newUser = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    description: description,
    avatar: AVATAR_LINK,
    favorite: favorite,
  };
  return JSON.stringify(newUser);
};

export const sortUsers = (a, b, asc) =>
  asc
    ? a.first_name < b.first_name
      ? -1
      : 1
    : a.first_name < b.first_name
    ? 1
    : -1;

export const favoriteUsers = (user, favorite) =>
  favorite ? user.favorite : user;
