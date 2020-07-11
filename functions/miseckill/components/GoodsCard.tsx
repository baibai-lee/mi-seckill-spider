interface GoodsCardInterface {
  id: string
  imgUrl: string
  title: string
  desc: string
  nowPrice: string
  originPrice: string
  discountPercent: number
  discountMoney: string
}

export const GoodsCard: React.FC<GoodsCardInterface> = (props) => {
  const { imgUrl, title, desc, nowPrice, originPrice, discountPercent, discountMoney } = props

  return (
    <section className='card'>
      <div className='card__img'>
        <img src={imgUrl} alt='title' />
      </div>
      <div className='card__info'>
        <span className='card__info-title'>{title}</span>
        <span className='card__info-desc'>{desc}</span>
        <span className='card__info-price'>
          <span className='card__info-price-now'>{nowPrice}元</span>
          <del className='card__info-price-origin'>{originPrice}元</del>
        </span>
        <span className='card__info-discount'>
          <span className='card__info-discount-percent'>
            <span>{discountPercent * 100}</span> 折
          </span>
          <span className='card__info-discount-money'>
            共优惠 <span>{discountMoney}</span> 元
          </span>
        </span>
        <span className='card__info-btn'>详情</span>
      </div>
    </section>
  )
}