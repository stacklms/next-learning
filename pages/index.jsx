import { Loader, Text } from "@mantine/core";
import React from "react";
import useSWR from "swr";

const Index = () => {

  const { data, error } = useSWR('/api/users')
  if (error) return <div>An error occured.</div>
  if (!data) return <Loader />

  return (
      <Text>Hello</Text>
  )
}

export default Index