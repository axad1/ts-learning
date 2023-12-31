{
  class Ride {
    private static _activeRides: number = 0;

    start() {
      Ride._activeRides++;
    }

    stop() {
      Ride._activeRides--;
    }

    static get activeRides(): number {
      return Ride._activeRides;
    }
    static set activeRides(rides: number) {
      Ride._activeRides = rides;
    }
  }

  const ride1 = new Ride();
  ride1.start();

  const ride2 = new Ride();
  ride2.start();
  Ride.activeRides = 99;

  console.log(Ride.activeRides);
}
