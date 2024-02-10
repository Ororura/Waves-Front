import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
import Service from '../../../services/Service'
import { Context } from '../../../core/Context'

export const Products = () => {
	const [product, setProduct] = useState([])
	const { addressContract, user } = useContext(Context)

	useEffect(() => {
		;(async () => {
			await Service.get({
				endpoint: `contracts/${addressContract}/USERS_PRODUCT_${user.login}`,
			}).then(data => {
				if (data.error !== 304) {
					setProduct(JSON.parse(data.value))
				}
			})
		})()
	}, [])

	return (
		<div>
			{product.length !== 0 && (
				<>
					<p style={{ textAlign: 'center', fontSize: '25px' }}>Ваши продукты</p>
					{product.map((el, idx) => (
						<div
							key={idx}
							style={{
								backgroundColor: 'purple',
								color: 'white',
								fontSize: '25px',
								borderRadius: '15px',
								marginTop: '20px',
								padding: '10px',
								textAlign: 'center',
							}}
						>
							<p>Название продукта: {el.productName}</p>
							<p>Описание продукта: {el.productDesc}</p>
							<p>
								Регионы доставки:{' '}
								{el.regions.map((el, idx) => (
									<span key={idx}>{el} </span>
								))}
							</p>
						</div>
					))}
				</>
			)}
		</div>
	)
}
