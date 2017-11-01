class Utils{
	static xyToGridPosition(x){
		return (x-(Game.GRID_CELL_SIZE/2))/Game.GRID_CELL_SIZE;
	}
}