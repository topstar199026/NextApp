import { ReactNode, useEffect, useState } from 'react';

import {getTestDataAction} from '../../src/actions/dataAction';

export default function TestPage() {

  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
	}, []);

  const getData = async () => {
    const res = await getTestDataAction();
    console.log(res)
    if(res.data.success) {
      setDataCount(res.data.data.length);
    }else setDataCount(0);
  }

  return (
    <div>
      <div>
        <span>Data Count : </span>
        <span>{dataCount}</span>
      </div>
      <button onClick={() => getData()}>Call api</button>
    </div>
  )
}
