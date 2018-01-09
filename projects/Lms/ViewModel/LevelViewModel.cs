namespace ViewModel
{
    using Commons.ViewModel;

    using Model;

    public class LevelViewModel : BaseViewModel<Level>
    {
        public LevelViewModel(Level x)
            : base(x)
        {
            this.Name = x.Name;
            this.Index = x.Index;
        }

        public string Name { get; set; }

        public int Index { get; set; }
    }
}