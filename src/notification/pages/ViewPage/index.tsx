import * as React from 'react';
import { useMemo } from 'react';
import  Body  from './Body';
export interface IViewPageProps {
}
const ViewPage = () => {
  const renderBody = useMemo(() => {
    return (
    <div>
      <Body/>
    </div>)
    ;
  }, []);

  return <div>{renderBody}</div>;
};

export default ViewPage;
