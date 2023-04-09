import React, { useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { ethers } from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider(
            // 'https://rinkeby.infura.io/v3/'
             'https://goerli.infura.io/v3/'
        )
    )
)

function Dashboard({ address }) {
    // const [sanityTokens, setSanityTokens] = useState([])
    // const [thirdWebTokens, setThirdWebTokens] = useState([])
    const [twTokens, setTwTokens] = useState([])
    const [sanityTokens, setSanityTokens] = useState([])
    useEffect(() => {
        const getSanityAndThirdWebToken = async () => {

            const coins = await fetch("put here sanity api url,that you can get from sanity database")
            const sanityToken = (await coins.json()).result
            setSanityTokens(sanityToken)
            setTwTokens(sanityToken.map(token => sdk.getTokenModule(token.contractAddress)))

        }
        return getSanityAndThirdWebToken()
    }, [])
    return (
        <Wrapper>
            <Sidebar />
            <MainContainer>
                <Header
                    twTokens={twTokens}
                    sanityTokens={sanityTokens}
                    walletAddress={address}
                />
                <Main
                    twTokens={twTokens}
                    sanityTokens={sanityTokens}
                    walletAddress={address}
                />
            </MainContainer>
        </Wrapper>


    )
}

export default Dashboard


const Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100vw;
/* background-color: #0a0b0d; */
color: white;
overflow: hidden;
background-color: #0f0e13;
  background-image: radial-gradient(
      at 0% 0%,
      hsla(253, 16%, 7%, 1) 0,
      transparent 50%
    ),
    radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
`

const MainContainer = styled.div`
flex: 1;
`
