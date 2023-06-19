import reservationsReducer, {
  createReservation,
  initialState,
} from './reservationsSlice';

describe('reservationsSlice', () => {
  describe('createReservation', () => {
    const mockFormData = {
      customer_id: 1,
      place_id: 2,
      start_date: '2023-06-17',
      end_date: '2023-06-20',
    };

    it('should dispatch the pending action and set ifLoading to true', () => {
      const nextState = reservationsReducer(
        initialState,
        createReservation.pending(),
      );
      expect(nextState.ifLoading).toBe(true);
    });

    it('should dispatch the fulfilled action and update ifLoading, ifSucceed, and reservationsItems', () => {
      const mockResponseData = { id: 1, ...mockFormData };
      const nextState = reservationsReducer(
        initialState,
        createReservation.fulfilled(mockResponseData),
      );
      expect(nextState.ifLoading).toBe(false);
      expect(nextState.ifSucceed).toBe(true);
      expect(nextState.reservationsItems).toEqual([mockResponseData]);
    });

    it('should dispatch the rejected action and update ifLoading and errors', () => {
      const errorMessage = 'An error occurred';
      const nextState = reservationsReducer(
        initialState,
        createReservation.rejected(errorMessage),
      );
      expect(nextState.ifLoading).toBe(false);
      expect(nextState.errors).toBe(errorMessage);
    });
  });
});
