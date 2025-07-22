'use client'

import Header from '@/components/LayoutComponents/Header';
import Products from '@/components/Products';


function page() {



    return (

        <section className="">

            <Header
                title='Coffees at'
                intro='All different varieties of coffee we offer at Brewhez .'
            />
            {/* imported a custom product page from the component folder */}
            <Products />

        </section>

    )

}

export default page