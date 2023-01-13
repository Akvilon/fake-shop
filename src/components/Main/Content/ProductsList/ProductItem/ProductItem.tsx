import React from 'react'
import {Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image} from "@chakra-ui/react";

type ProductItemType = {
    displayName: string
    image250: string
}

export const ProductItem: React.FC<ProductItemType> = ({displayName, image250}) => {
    return (
        <>
            <Card width='380px'>
                <CardBody>
                    <Image
                        src={image250}
                        alt=''
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{displayName}</Heading>
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