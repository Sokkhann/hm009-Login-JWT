import CardDetail from '@/components/card/CardDetail';
import React from 'react'
import { Metadata, ResolvingMetadata } from "next";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: string) => {
	const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

// this method is generate metadata base on each product get from endpoint
async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;
	const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

	const previousImages = (await parent).openGraph?.images || [];
	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: [product.image, ...previousImages],
		},
	};
}

export default async function page(props: Props) {
  let data = await getData(props.params.id);

	return (
		<div className="h-screen grid place-content-center">
			<CardDetail
				title={data?.title || "NoTitle"}
				description={data?.description || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
			/>
		</div>
	);

}
