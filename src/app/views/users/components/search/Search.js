import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SEARCH } from '../../../../constants/constants';
import { useDebounce } from '../../../../hooks/index';
import { Input } from '../../../../library/index';
import { searchUsers } from '../../store/usersSlice';

const Search = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      [SEARCH]: '',
    },
  });

  const {
    control,
    formState: { errors },
    watch,
  } = methods;

  const watchSearch = watch(SEARCH, false);
  const debouncedSearch = useDebounce(watchSearch, 500);

  useEffect(() => {
    dispatch(searchUsers(debouncedSearch));
  }, [debouncedSearch, dispatch]);

  return (
    <div>
      <Input
        control={control}
        placeholder="Search"
        name={SEARCH}
        errors={errors}
        disabled={false}
        dataTestId={SEARCH}
      />
    </div>
  );
};

export default Search;
