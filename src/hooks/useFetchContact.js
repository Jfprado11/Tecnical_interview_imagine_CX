import { useEffect, useState } from 'react';

const useFetchContact = (callback, url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = null;
        if (url) {
          res = await callback(url);
        } else {
          res = await callback();
        }
        const info = res.data;
        // const { data: country } = await callback(info.address.country.links[0].href);
        // getting the email
        const { data: link_email } = await callback(info.emails.links[0].href);
        // let email = '';
        // if (link_email.items.lenght !== 0) {
        //   email = await callback(link_email.items[0].href);
        // }
        // getting the phoneNumber
        const { data: link_phone } = await callback(info.phones.links[0].href);
        // let phone = '';
        // if (link_phone.items.lenght !== 0) {
        //   phone = await callback(link_phone.items[0].href);
        // }

        // getting the organization
        // const { data: organization } = await callback(info.organization.links[0].href);

        await Promise.all([
          callback(info.address.country.links[0].href),
          callback(link_email.items[0].href),
          callback(link_phone.items[0].href),
          callback(info.organization.links[0].href),
        ]).then((values) => {
          console.log('todos valores', values);
          const specificData = {
            ...info,
            country: values[0].data.name,
            email: values[1].data.address,
            phone: values[2].data.number,
            organization: values[3].data,
          };
          setData(specificData);
        });
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, setData, error, loading };
};

export { useFetchContact };
