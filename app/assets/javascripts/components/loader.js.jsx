var Loader = React.createClass({
  render: function render () {
    return (
      <div className={'loader' + (this.props.paging ? ' active':'')}>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMikiIGQ9Ik0wIDEyIFYyMCBINCBWMTJ6Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIHZhbHVlcz0iTTAgMTIgVjIwIEg0IFYxMno7IE0wIDQgVjI4IEg0IFY0ejsgTTAgMTIgVjIwIEg0IFYxMno7IE0wIDEyIFYyMCBINCBWMTJ6IiBkdXI9IjEuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMCIga2V5dGltZXM9IjA7LjI7LjU7MSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjYgMC40IDAuODswLjIgMC44IDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiICAvPgogIDwvcGF0aD4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4KSIgZD0iTTAgMTIgVjIwIEg0IFYxMnoiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgdmFsdWVzPSJNMCAxMiBWMjAgSDQgVjEyejsgTTAgNCBWMjggSDQgVjR6OyBNMCAxMiBWMjAgSDQgVjEyejsgTTAgMTIgVjIwIEg0IFYxMnoiIGR1cj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjIiIGtleXRpbWVzPSIwOy4yOy41OzEiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC42IDAuNCAwLjg7MC4yIDAuOCAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAgLz4KICA8L3BhdGg+CiAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQpIiBkPSJNMCAxMiBWMjAgSDQgVjEyeiI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJkIiB2YWx1ZXM9Ik0wIDEyIFYyMCBINCBWMTJ6OyBNMCA0IFYyOCBINCBWNHo7IE0wIDEyIFYyMCBINCBWMTJ6OyBNMCAxMiBWMjAgSDQgVjEyeiIgZHVyPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNCIga2V5dGltZXM9IjA7LjI7LjU7MSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjYgMC40IDAuODswLjIgMC44IDAuNCAwLjgiIGNhbGNNb2RlPSJzcGxpbmUiIC8+CiAgPC9wYXRoPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwKSIgZD0iTTAgMTIgVjIwIEg0IFYxMnoiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZCIgdmFsdWVzPSJNMCAxMiBWMjAgSDQgVjEyejsgTTAgNCBWMjggSDQgVjR6OyBNMCAxMiBWMjAgSDQgVjEyejsgTTAgMTIgVjIwIEg0IFYxMnoiIGR1cj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjYiIGtleXRpbWVzPSIwOy4yOy41OzEiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC42IDAuNCAwLjg7MC4yIDAuOCAwLjQgMC44IiBjYWxjTW9kZT0ic3BsaW5lIiAvPgogIDwvcGF0aD4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNikiIGQ9Ik0wIDEyIFYyMCBINCBWMTJ6Ij4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIHZhbHVlcz0iTTAgMTIgVjIwIEg0IFYxMno7IE0wIDQgVjI4IEg0IFY0ejsgTTAgMTIgVjIwIEg0IFYxMno7IE0wIDEyIFYyMCBINCBWMTJ6IiBkdXI9IjEuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC44IiBrZXl0aW1lcz0iMDsuMjsuNTsxIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuNiAwLjQgMC44OzAuMiAwLjggMC40IDAuOCIgY2FsY01vZGU9InNwbGluZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPg==" />
      </div>
    );
  }
});