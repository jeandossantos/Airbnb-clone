import React from 'react';
import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';
import Button from '../Button';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (date: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export default function ListingReservation({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
}: ListingReservationProps) {
  return (
    <div
      className="
      bg-white
      rounded-xl
      border-[1px]
      border-neutral-200
      overflow-hidden
    "
    >
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>

      <hr />

      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <br />
      <div className="p-4">
        <Button
          label="Reserve"
          disabled={disabled}
          onClick={onSubmit}
        />
      </div>

      <div className="flex items-center justify-between p-4 text-lg font-semibold ">
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
}
