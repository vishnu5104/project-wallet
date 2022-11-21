import React from 'react'
import { AuthProvider, AppMode } from '@arcana/auth'
import { ethers } from 'ethers'

const First = () => {
  const checkIfWalletISConnected = async () => {
    const auth = new AuthProvider('80eFC42f59eC1526327b9EbAECa5b9A7d81FfDE0')

    try {
      await auth.init({ position: 'right' })

      // const arcanaProvider = await auth.loginWithSocial('google')
      const provider = auth.provider

      const connected = await auth.isLoggedIn()
      console.log({ connected })
      setHooks()

      function setHooks() {
        provider.on('connect', async (params) => {
          console.log({ type: 'connect', params: params })
          const isLoggedIn = await auth.isLoggedIn()
          console.log({ isLoggedIn })
        })
        provider.on('accountsChanged', (params) => {
          //Handle
          console.log({ type: 'accountsChanged', params: params })
        })
        provider.on('chainChanged', async (params) => {
          console.log({ type: 'chainChanged', params: params })
        })
      }

      const accounts = await provider.requestUserInfo({
        method: 'eth_accounts',
        params: [],
      })
      console.log({ accounts })
      console.log('kkl')

      // const provider = new ethers.providers.Web3Provider(arcanaProvider)

      // const provider = auth.provider
      // // console.log('hhd')
      // // const accounts = await provider.requestUserInfo('methods:')

      // console.log({ accounts })

      //   const accounts = await provider
      // console.log({ accounts })

      // await provider.getBlockNumber()
      // 14983200
    } catch (e) {
      console.log(e)
    }
  }
  checkIfWalletISConnected()
}

export default First
