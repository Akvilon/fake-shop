import React from 'react'
import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image} from "@chakra-ui/react";
import { Product } from '../../../../../redux/features/products/types'

type ProductItemType = {
   product: Product
}

export const ProductItem: React.FC<ProductItemType> = ({product}) => {
    return (
        <>
            <Card width='380px'>
                <CardBody>
                    <Image
                        src={product.images[2]}
                        alt=''
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{product.title}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}