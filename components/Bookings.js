import { Table } from 'react-bootstrap';

const Bookings = (props) => {
  return (
    <div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>BookingId</th>
						<th>Cliente</th>
						<th>Fecha de Creación</th>
						<th>Dirección</th>
						<th>Precio</th>
					</tr>
				</thead>
				<tbody>
        	{props.bookings.map((booking) => (
						<tr key={booking.bookingId}>
							<td>{booking.bookingId}</td>
							<td>{booking.tutenUserClient.firstName} {booking.tutenUserClient.lastName}</td>
							<td>{booking.bookingTime}</td>
							<td>{booking.locationId.streetAddress}</td>
							<td>{booking.bookingPrice}</td>
						</tr>
					))}
				</tbody>
			</Table>
    </div>
  );
};

export default Bookings;
