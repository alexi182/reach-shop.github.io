import * as productActions from '../actions/products';
import { connect } from 'react-redux';
import SideBar from '../components/sidebar';
import ProductItem from './productitem';

@connect (store => {
   return store.products;
})

export default class ProductPage extends React.Component{
   constructor(props){
      super(props);
      this.props.dispatch(productActions.getProducts());
   }
   render() {
      if(this.props.isFinding) {
         return (
             <div>
                Search...
             </div>
         )
      }

      return (
          <div className="row">

             <SideBar />

             <div className="page-content cell-9 cell-8-md cell-12-sm">
                <div className="decorated-title-wrapper">
                   <div className="decorated-title">
                      <div className="page-header-wrapper">
                         <h1 className="page-header">Планшеты</h1>
                      </div>
                   </div>

                   <div className="collection-toolbar is-top">
                      <button type="button" className="button hide show-sm open-filter js-open-filter is-primary">Фильтр</button>

                      <form className="collection-order-wrapper" action="#" method="get">
                         <div className="collection-order is-order  ">
                            <label className="label-field hide">Сортировка</label>

                            <select className="select-field js-filter-trigger" name="order">
                               <option value="">Сортировка</option>
                               <option value="price">по возрастанию цены</option>
                               <option value="descending_price">по убыванию цены</option>
                               <option value="descending_age">сначала новые</option>
                               <option value="age">сначала старые</option>
                            </select>
                         </div>
                      </form>

                   </div>
                </div>

                <div className="collection-description at-top content editor">
                   <p><span><img src="https://static-eu.insales.ru/files/1/1917/2402173/original/tab.jpg" alt="" /></span></p>
                   <p><span>Статистика показывает, что покупатели все чаще выбирают для домашних и&nbsp;рабочих нужд планшет. Именно это устройство приходит на&nbsp;смену ноутбуку или системному блоку. Эти универсальные помощники есть в&nbsp;модельном ряду каждого крупного производителя. Давайте разберемся, какие моменты стоит учитывать при выборе подобного гаджета.</span></p>
                </div>

                <div className="products-list row">
                   {this.props.products.map((p, index) =>
                       <ProductItem {...p} key={index} />
                   )}
                </div>

                <div className="collection-toolbar is-bottom flex-middle flex-between">
                   <form className="collection-order-wrapper" action="#" method="get">
                      <div className="collection-order is-page-size">
                         <label className="label-field">Показывать по</label>
                         <select className="select-field js-filter-trigger">
                            <option value="12">3</option>
                            <option value="24">6</option>
                            <option value="48">все</option>
                         </select>
                      </div>
                   </form>
                   <ul className="pagination text-right">
                   </ul>
                </div>
                <div className="collection-description is-seo content editor">
                </div>
             </div>
          </div>
      )
   }
}

