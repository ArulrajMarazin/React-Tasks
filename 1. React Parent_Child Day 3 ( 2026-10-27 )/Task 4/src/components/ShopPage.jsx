import React from 'react'
import { HeaderSection } from './pages/HeaderSection'
import { ProductSection } from './pages/ProductSection'
import { OfferSection } from './pages/OfferSection'
import { FooterSection } from './pages/FooterSection'

function ShopPage() {
  return (
    <>
      <HeaderSection />
      <ProductSection />
      <OfferSection />
      <FooterSection />
    </>
  )
}

export default ShopPage