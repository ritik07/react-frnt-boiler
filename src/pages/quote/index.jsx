import React from "react";
import { Tabs, Table } from "antd";
import { AppController } from "../../appController/AppController";
import { MainWrapper } from "../../lib/wrapper";

const { TabPane } = Tabs;

const columns = [
	{
	  title: 'Product Name',
	  dataIndex: 'name',
	  key: 'name',
	},
	{
	  title: 'Quote info',
	  dataIndex: 'age',
	  key: 'age',
	},
	{
	  title: 'Status',
	  dataIndex: 'address',
	  key: 'address',
	},
];

export const QuotePage = ({history}) => {
  function callback(key) {
    console.log(key);
  }

  return (
    <div>
      <AppController history={history}>
        <MainWrapper>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Quote" key="1">
              <div className="mb-10">
              Here you can see all your quotes.
			  </div>
			  <Table dataSource={[]} columns={columns} />
            </TabPane>
          </Tabs>
        </MainWrapper>
      </AppController>
    </div>
  );
};
