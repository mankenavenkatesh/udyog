pragma solidity ^0.4.20;

contract Reputation{
  /*  
    struct Recommend{
        string name;
        bytes32 id;
        uint recToken;
    }
    
    struct Request{
        string name;
        bytes32 id;
    }*/
    
    struct Profile{
        string name;
        uint8 send;
        uint8 receive;
        uint repo;
        bytes32[] reqs;
        bytes32[] recs;
    }
    
    mapping(bytes32=>uint) _repo;
    mapping(bytes32=>Profile) _status;
    mapping(bytes32=>string) _names;
    bytes32[] enrolled;
    
    event Requested(bytes32 indexed _id, string _name);
    event Recommended(bytes32 indexed _id, string _name);
    event Received(bytes32 indexed _id, string _from, bytes32 _fromId);
    
    function requestRecommendation(string _name, bytes32 _from, bytes32 _to) public returns(bool){
        require(_from!=bytes32(0) && _to!=bytes32(0));
        //adding to request queue of recommender
        bytes32[] _reqs=_status[_to].reqs;
        _reqs.push(_from);
        _status[_to].reqs=_reqs;
        emit Requested(_from, _name);
        return true;
    }
    
    function recommend(bytes32 _to,bytes32 _from, uint _percentage){
        
        //deleting from request queue of recommender
        bytes32[] _reqs=_status[_from].reqs;
        if(_reqs.length==1 && _reqs[0] == _to){
         delete _reqs[_reqs.length-1];
         _reqs.length--;}
       else{
           uint index; uint j; bool check;
           for( j=0;j<=_reqs.length-1;j++){
              if(_reqs[0] == _to){
                  index=j;
                  check=true;
                  break;
          }}
          if(check){
            for ( j = index; j<_reqs.length-1; j++){
                _reqs[j] = _reqs[j+1];
            }
            delete _reqs[_reqs.length-1];
            _reqs.length--;
            
        }
        else{
            revert();
        }
        
       }
       _status[_from].reqs=_reqs;
      _status[_from].send-=1;
      _status[_to].receive+=1;

       
       //assigning reputation score
      // uint score=_status[_to].repo;
       uint ref_score=_status[_from].repo;
       uint update=ref_score*_percentage;
       update=update/100;
      // score=score+update;
       _status[_to].repo+=update;
       _repo[_to]=_status[_to].repo;
       
       //Adding to recommendation of receiver
        bytes32[] _recs=_status[_to].recs;
        _recs.push(_from);
        
        //events
        emit Recommended(_from, _names[_to]);
        emit Received(_to, _names[_from], _from);
        
      
    }
    
    function getRepo(bytes32 _id) view returns (uint){
        return _repo[_id];
    }
    
    
    function register(string name,uint repo,bytes32 _id) public{
        require(repo!=0);
        require(_id!=bytes32(0));
        _repo[_id]=repo;
         Profile p=_status[_id];
         p.repo=repo;
         p.name=name;
         p.send=5;
         p.receive=5;
         enrolled.push(_id);
         _names[_id]=name;
           
    }
    
    function refilTokens() public{
        for(uint i=0;i<enrolled.length;i++){
            Profile p=_status[enrolled[i]];
            p.send=5;
            p.receive=5;
        }
    }
    
    function updateRepo(bytes32 _id,uint repo) public{
        _repo[_id]=_repo[_id]+repo;
         Profile p=_status[_id];
         //uint x=p.repo;
         p.repo+=repo;
    }
    
    function getName(bytes32 _id) view public returns(string){
        return _names[_id];
    }
    
    
    
}
