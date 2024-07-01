import { useMemo } from 'react';

const WritePage = () => {
  const renderBody = useMemo(() => {
    return <div>This is Demo / Write page</div>;
  }, []);

  return <div>{renderBody}</div>;
};

export default WritePage;
