import React, { ReactElement } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';

import Table from '../components/Table';

interface Props {}

interface Brand {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Brand({}: Props): ReactElement {
  const { isLoading, error, data, isFetching } = useQuery("brandData", () =>
    axios.get("http://localhost:1234/brand").then((res) => {
      return res?.data?.data;
    })
  );
  return (
    <div>
      <h1>Brand</h1>
      <Table 
        columns={[
            {
                title: 'id',
                key: 'id',
                render: (value, record, index) => (<div key={index}>{value}</div>)
            },
            {
                title: 'Name',
                key: 'name'
            }
        ]}
        dataSource={data}
      />
    </div>
  );
}
