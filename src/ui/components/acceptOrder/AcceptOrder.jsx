import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Context } from '../../../core/Context';
import { Container } from '../HOC/Container';

export const AcceptOrder = () => {
  const { acceptOrder } = useContext(Context);
  const [id, setId] = useState(0);
  const [status, setStatus] = useState('true');
  const handlerAcceptOrder = async e => {
    e.preventDefault();
    await acceptOrder(id, status);
  };
  return (
    <div>
      <Container>
        <Form>
          <Form.Label>Подтвердить заказ</Form.Label>
          <Form.Group className='mb-3'>
            <Form.Label>Id заказа</Form.Label>
            <Form.Control
              onChange={e => {
                setId(e.target.value);
              }}
              type='text'
              placeholder='Введите id продукта'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='role'>
            <Form.Label>Выберите решение</Form.Label>
            <Form.Select
              name='role'
              onChange={e => {
                setStatus(e.target.value);
              }}
            >
              <option value='true'>Согласиться</option>
              <option value='false'>Отказаться</option>
            </Form.Select>
          </Form.Group>

          <Button onClick={handlerAcceptOrder}>Отправить</Button>
        </Form>
      </Container>
    </div>
  );
};
