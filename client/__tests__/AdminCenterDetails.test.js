import ConnectedAdminCenterDetails, { CenterDetails } from '../components/AdminCenterDetails.jsx';

describe('AdminCenterDetails Component', () => {

  const initialState = {
    centerReducer: {
      status: "Error",
      message: "",
      center: {
      data:[{
        id: '1',
        name: 'City Hall',
        description: {
          substr: () => {}
        },
        location: {
          substr: () => {}
        },
        capacity:"500",
        price:"50000",
        image: "",
        available:'false',
        Events:[]
      }]
    }
    }
  };

  const store = mockStore(initialState);

  global.localStorage = {
    getItem: (str) => {
      return str;
    }
  }

  const props = {
    dispatch: () => {},
    centerId: "1",
    center: initialState.centerReducer.center
  };

  describe('AdminCenterDetails form  should render self', () => {
    it('it should render for dumb component', () => {
      const wrapper = shallow(<CenterDetails {...props} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('it should render connected component', () => {
      const wrapper = mount(<Provider store={store}><ConnectedAdminCenterDetails /></Provider>);
    });

  });

});
