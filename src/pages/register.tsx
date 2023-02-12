import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Input from '../components/form-elements/input'
import Select from '../components/form-elements/select'
import Button from '../components/form-elements/button'
import Header from '../components/form-components/Header'
import ABI from '../contracts/provenance.json'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { useToast } from '@chakra-ui/react'


const Register: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(0);

  const toast = useToast()

  const roles = [
    { name: 'Manufacturer', value: 'manufacturer' },
    { name: 'Distributor', value: 'distributor' },
  ]
  const { config } = usePrepareContractWrite({
    address: '0x3A0a9F84D6f64cCAaF9310453C71bE45ddd18645',
    abi: ABI,
    functionName: 'addUser',
    args: [name, role],
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "User Registered",
        description: "User has been registered successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    }
  }, [isSuccess])

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="LogChain - Register" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-1080px">
  <div className="max-w-7xl mt-5 pt-5 pb-5 mx-auto text-center">
    <Header heading="Register" />
    <div className="w-full my-10">
      <div className="rounded-lg shadow-lg backdrop-blur-lg bg-white/30 bg-opacity-40 dark:bg-gray-700/40">
        <div className="p-6">
          <form className="space-y-6 text-gray-900">
            <Input
              id="name"
              name="name"
              label="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              id="roles"
              name="roles"
              label="Roles"
              placeholder="Select role"
              options={roles}
              onChange={(event) => { 
                console.log(event.target.selectedIndex - 1);
                setRole(event.target.selectedIndex - 1) }}
            />
            <Button label="Register" onClick={() => {
              write?.()
            }} />
          </form>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Register