NORTH = "north";
SOUTH = "south";
EAST = "east";
WEST = "west";

DIRECTIONS = [NORTH, SOUTH, EAST, WEST];

oppositeDirection = function(dir) {
  if (dir == NORTH) return SOUTH;
  if (dir == SOUTH) return NORTH;
  if (dir == EAST)  return WEST;
  if (dir == WEST)  return EAST;
  throw new Error("Invalid direction");
}