import { useEffect, useState } from "react";
import { TRANSACTION_URL } from "../../shared/constant/constant";
import { getApi } from "../../shared/services/services";
import Table from "../../shared/components/table/table";
import { translationsColumns } from "../../shared/data/translationsColumns";
import Conatiner from "../../shared/components/container/conatiner";
import Loading from "../../shared/components/loading";
import Protected from "../../shared/components/auth/protected";

interface ITransaction {
  account_id: string;
  amount: number;
  category: string[];
  date: string;
  iso_currency_code: string;
  name: string;
  payment_channel: string;
  pending: boolean;
  transaction_id: string;
  transaction_type: string;
}

const Transactions = () => {
  const [transaction, setTransaction] = useState<null | ITransaction[]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const getTransactions = async () => {
    setLoading(true);
    try {
      const { data } = await getApi(TRANSACTION_URL);
      setTransaction(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Protected/>
      <Conatiner>
        <h1 className="text-[2em] underline">All Transaction</h1>
        {loading ? (
          <Loading />
        ) : (
          <Table cols={translationsColumns}>
            {transaction &&
              transaction.map((item) => (
                <tr key={item.transaction_id} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.account_id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.amount}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.category}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.iso_currency_code}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.payment_channel}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.pending}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.transaction_id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {item.transaction_type}
                  </td>
                </tr>
              ))}
          </Table>
        )}
      </Conatiner>
    </div>
  );
};

export default Transactions;
